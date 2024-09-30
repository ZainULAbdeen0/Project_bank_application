import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getAccount, getAccounts } from "@/lib/actions/bank.ations";
import RecentTransactions from "@/components/RecentTransactions";

const page = async({searchParams : {id , page="1"}} : SearchParamProps) => {
  const currentPage = Number(page as string)
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({userId: loggedIn.$id })
  if(!accounts) return;

  const appwriteItemId = (id as string) || (accounts?.data[0]?.appwriteItemId)
  const account = await getAccount({appwriteItemId});


  const accountsData = accounts?.data
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type = "greeting"
            title = "Welcome"
            user = {`${loggedIn?.firstName} ${loggedIn?.lastName}`}
            subtext = "Access and manage you account and transactions effectively"
          />
          <TotalBalanceBox
            accounts = {accountsData}
            totalBanks = {accounts?.totalBanks}
            totalCurrentBalance = {accounts?.totalCurrentBalance}
          />

        </header>
        <RecentTransactions
          accounts = {accounts.data}
          transactions = {account.transactions}
          page = {currentPage}
          appwriteItemId = {appwriteItemId}

        />
      </div>
      <RightSidebar
        user = {loggedIn}
        banks = {accountsData.slice(0,2)}
        transactions={account.transactions}
      />
    </section>
  
  )
}

export default page;