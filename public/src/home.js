function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  
  return accounts.length
}

function getBooksBorrowedCount(books) {
  
  const answer=[]
  for(let book of books){
    
    const {borrows}=book
    if(!borrows[0].returned){
      answer.push(1)
    }
  }
return answer.reduce((a,b) => a+b)
}

function getMostCommonGenres(books) {
  
      const allGenres=[]
const dup=[]
  for(let book of books){
    const {genre}=book
    
 if(!dup.includes(genre)){
   dup.push(genre)
      const filteredGenres=books.filter(bk => bk.genre===genre)
    const obj={
      name:genre,
      count:filteredGenres.length
    }
    
  allGenres.push(obj)
 }
   
    if(allGenres.length>=5){
      break
    }
    
  }
  
  allGenres.sort((a,b) => b.count -a.count)
  
  return allGenres
}

function getMostPopularBooks(books) {
  
  books.sort((a,b) =>b.borrows.length- a.borrows.length)
  const answer=books.slice(0,5).map(b =>{
    return  {
      name:b.title,
      count:b.borrows.length
    }
  })
return answer
  }

function getMostPopularAuthors(books, authors) {
  
  const authId=authors.map(auth => auth.id)
  
  const bookCheckOut=authId.map(id => {
   const authorb= books.find(bk => bk.authorId ===id)
   const {borrows}=authorb
   const checkOutLength=borrows.length
   const obj=authors.find(n => n.id ===id )
   const {name:{first,last}}=obj
   return {
     name:first+' '+last,
     count:checkOutLength
   }
  })
  
 return bookCheckOut.sort((a,b) => b.count -a.count).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
