function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
   return accounts.length
}



function getBooksBorrowedCount(books) {
  const totalBookBorrowed=[]
  for(let book of books){
    const {borrows}=book
    if(!borrows[0].returned){
      totalBookBorrowed.push(1)
    }
  }
return totalBookBorrowed.reduce((firstItemInTheSum,secondItemInTheSum) => firstItemInTheSum+secondItemInTheSum)
}


function getMostCommonGenres(books) {
  const getAllBooksGenre=[]
const duplicateGenre=[]
  for(let book of books){
    const {genre}=book
    if(!duplicateGenre.includes(genre)){
   duplicateGenre.push(genre)
      const filteredByBookGenre=books.filter(book => book.genre===genre)
    const genreSummary={
      name:genre,
      count:filteredByBookGenre.length
    }
     getAllBooksGenre.push(genreSummary)
 }
   if(getAllBooksGenre.length>=5){
      break
    }
    
  }
  getAllBooksGenre.sort((firstGenre,secondGenre) =>  secondGenre.count - firstGenre.count)
  return getAllBooksGenre
}



function getMostPopularBooks(books) {
  books.sort((firstBook,secondBook) => secondBook.borrows.length - firstBook.borrows.length)
  const fiveMostPopularBooks=books.slice(0,5).map(book =>{
    return  {
      name:book.title,
      count:book.borrows.length
    }
  })
return fiveMostPopularBooks
  }

function getMostPopularAuthors(books, authors) {
  
  const getAllAuthorIds=authors.map(author => author.id)
  const getAthorStatsOnBook=getAllAuthorIds.map(authorId=> {
   const getBookByAuthorId= books.find(book => book.authorId ===authorId)
   const {borrows}=getBookByAuthorId
   const numberOfTimesTheBookBeenUsed=borrows.length
   const rettrievedAuthorInfo=authors.find(author => author.id ===authorId )
   const {name:{first,last}}=rettrievedAuthorInfo
   return {
     name:first+' '+last,
     count:numberOfTimesTheBookBeenUsed
   }
  })
  
  return getAthorStatsOnBook.sort((firstAuthor,secondAuthor) => secondAuthor.count - firstAuthor.count).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
