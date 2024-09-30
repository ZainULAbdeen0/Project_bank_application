import HeaderBox from '@/components/HeaderBox'
import { Pagination } from '@/components/Pagination';
import TransactionTable from '@/components/TransactionTable';
import { getAccount, getAccounts } from '@/lib/actions/bank.ations';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { formatAmount } from '@/lib/utils';
import React from 'react'

const TransactionHistory = async ({searchParams:{id,page="1"}}:SearchParamProps) => {
  const currentPage = Number(page as string)
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({userId: loggedIn.$id });
  if(!accounts) return;

  const appwriteItemId = (id as string) || (accounts?.data[0]?.appwriteItemId);
  const account = await getAccount({appwriteItemId});

  const accountsData = accounts?.data
  const transactionsPerPage = 10;
  const totalPages = Math.ceil(account.transactions.length / transactionsPerPage);
  const indexOfLastTransaction  =  transactionsPerPage * currentPage;
  const indexOfFirstTransation = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = account.transactions.splice(indexOfFirstTransation , indexOfLastTransaction)

  return (
    <div className='transactions'>
      <div className="transactions-header">
        <HeaderBox
          title = "Transaction History"
          subtext = "See your bank details and transations history."
        />
      </div>
      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h1 className='text-white font-bold text-18'>{account?.data.name}</h1>
            <p className='text-blue-25 text-14'>{account?.data.officialName}</p>
            <p className='text-14 font-semibold tracking-[1.1px] text-white'>
              ●●●● ●●●● ●●●●<span className="text-16">&nbsp;{account?.data.mask}</span>
            </p>
          </div>
          <div className="transactions-account-balance">
            <p>Current balance</p>
            <p className="text-24 text-center font-bold">{formatAmount(account?.data.currentBalance)}</p>
          </div>
        </div>
        <div className="w-full">
          <TransactionTable
            transactions={currentTransactions}
          />
          <Pagination totalPages={totalPages} page={currentPage} />

        </div>
      </div>
    </div>
  )
}

export default TransactionHistory