import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from '@/components/TotalBalanceBox'

const page = () => {

  const loggedIn = { firstName : "Zain"}

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
    </section>
  )
}

export default page