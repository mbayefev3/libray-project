function findAccountById(accounts, id) {
 const getAccountInfoById=accounts.filter(account => account.id===id)
  return getAccountInfoById[0]
}


function sortAccountsByLastName(accounts) {
 accounts.sort((firstAcount,secondAccount) => {
const {name:{last:lastNameOnTheFirstAccount}}=firstAcount
const {name:{last:lastNameOnTheSecondAccount}}=secondAccount
return lastNameOnTheFirstAccount<lastNameOnTheSecondAccount ? -1:0
 })
  return accounts
}


function getTotalNumberOfBorrows(account, books) {
 const {id} =account
// helper function
  const getAllBorrowedBooks=(books) => books.map(book => {
const {borrows}=book
return borrows.filter(borrower => borrower.returned)
  }).flat()
  // 
  const getTotalBorrowedBookById=getAllBorrowedBooks(books).filter(book => book.id===id)
  return getTotalBorrowedBookById.length
}




function getBooksPossessedByAccount(account, books, authors) {
 const {id,first, last} =account
 const booksCheckedOutById=books.filter(book => {
      const {borrows}=book
 return borrows.some(book => book.id===id && book.returned===false)
    })
  const summaryOfBooksCheckedOutById=booksCheckedOutById.map(book =>{
const {id,title,genre,authorId,borrows}=book
const authorInfo=authors.filter(author => author.id===authorId )

return {
  id,
  title,
  genre,
  authorId,
  author:authorInfo[0],
  borrows
}
})
     


return summaryOfBooksCheckedOutById
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
