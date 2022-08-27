function findAuthorById(authors, id) {
  return authors.find(author => author.id===id)
}


function findBookById(books, id) {
return books.find(book => book.id===id)
}


function partitionBooksByBorrowedStatus(books) {
 // helper func
  const findBookBasedOnBorrowedStatus=(boolean, books) => {
   return books.filter(book =>{
   const {borrows}=book
   const [borrowerStatus]=borrows
   return borrowerStatus.returned===boolean
   })
  }
  // 
 const getAllCheckOutBook=findBookBasedOnBorrowedStatus(false,books)
 const getAvailableBooks =findBookBasedOnBorrowedStatus(true,books)
 return [getAllCheckOutBook, getAvailableBooks]
}


function getBorrowersForBook(book, accounts) {
const {borrows}=book
const borrowers=[]
  for(let account of accounts){
    const {id,picture,age,name,company,email, registered}=account
 const retrievedBorrowerStatus=borrows.find(borrower => borrower.id===id)
 if(retrievedBorrowerStatus!==undefined){
    const {returned}=retrievedBorrowerStatus
 const borrowerInfo={
id,returned,picture,age,name,company,email,registered
 }
 if(borrowers.length<=10){
  borrowers.push(borrowerInfo)
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
