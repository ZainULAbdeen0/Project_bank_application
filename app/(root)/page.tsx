import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from "@/components/RightSidebar";

const page = () => {

  const loggedIn = { firstName : "Zain" , lastName: "Ul Abdeen" , email:"xyz@gmail.com"}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type = "greeting"
            title = "Welcome"
            user = {loggedIn?.firstName || "Guest"}
            subtext = "Access and manage you account and transactions effectively"
          />
          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {2100.35}
          />
        </header>
      </div>
      <RightSidebar
        user = {loggedIn}
        banks = {[{currentBalance:345.54},{currentBalance:220.20}]}
        transactions={[]}
      />
    </section>
  
  )
}

export default page