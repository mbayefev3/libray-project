function findAccountById(accounts, id) {

  const getAccountById=accounts.filter(c => c.id===id)
  return getAccountById[0]
}

function sortAccountsByLastName(accounts) {
  accounts.sort((a,b) => {
const {name:{last:lastA}}=a
const {name:{last:lastB}}=b

return lastA<lastB ? -1:0


  })
  return accounts
}


function getTotalNumberOfBorrows(account, books) {

  const {id:accountId} =account

  const getAllBorrowBooks=(books) => books.map(bk => {
const {borrows}=bk
return borrows.filter(bk => bk.returned)
  }).flat()
  
  const totalBorrowBookById=getAllBorrowBooks(books).filter(bk => bk.id===accountId)
  return totalBorrowBookById.length
}




function getBooksPossessedByAccount(account, books, authors) {

  const {id,first, last} =account
 const bkInfo=books.filter(bk => {
      const {borrows}=bk

     return borrows.some(bk => bk.id===id && bk.returned===false)
    })
 
     const summary=bkInfo.map(book =>{
const {id,title,genre,authorId,borrows}=book
const authorInfos=authors.filter(a => a.id===authorId )

return {
  id,
  title,
  genre,
  authorId,
  author:authorInfos[0],
  borrows
}
})
     


return summary
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
