function findAuthorById(authors, id) {

  return authors.find(auth => auth.id===id)
}

function findBookById(books, id) {

  return books.find(bk => bk.id===id)
}


function partitionBooksByBorrowedStatus(books) {

  // helper func
  const findBook =(bool, books) => {
   return books.filter(bk =>{
   const {borrows}=bk
   const [first]=borrows
   return first.returned===bool
   
 })
  }
  // 
 const findCheckOut=findBook(false,books)
 const findCheckIn =findBook(true,books)
 
 
 return [findCheckOut, findCheckIn]

}


function getBorrowersForBook(book, accounts) {

  const {borrows}=book

  const borrowers=[]
  for(let acc of accounts){
    const {id,picture,age,name,company,email, registered}=acc
 const getInfo=borrows.find(bk => bk.id===id)
 if(getInfo!==undefined){
    const {returned}=getInfo
 const obj={
id,returned,picture,age,name,company,email,registered
 }
 
 if(borrowers.length<=10){
  borrowers.push(obj)

 }else{
  break
 }

  }
 }

  return borrowers

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
