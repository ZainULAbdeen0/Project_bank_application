import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { BankTabItem } from "./BankTabItem";
import BankInfo from "./BankInfo";
import TransactionTable from "./TransactionTable";
import { Pagination } from "./Pagination";

const RecentTransactions = ({
  accounts,
  transactions = [],
  page = 1,
  appwriteItemId,
}: RecentTransactionsProps) => {
  const transactionsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);
  const indexOfLastTransaction  =  transactionsPerPage * page;
  const indexOfFirstTransation = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.splice(indexOfFirstTransation , indexOfLastTransaction)
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent Transactions</h2>
        <Link
          href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View all
        </Link>
      </header>
      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transaction-tablist">
          {accounts.map((account:Account)=>(
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
                <BankTabItem
                  account = {account}
                  key = {account.id}
                  appwriteItemId = {appwriteItemId}
                />
            </TabsTrigger>
          ))}
        </TabsList>
        {accounts.map((account:Account)=>(
            <TabsContent value={account.appwriteItemId} key={account.id} className="space-y-4">
              <BankInfo
                account = {account}
                appwriteItemId = {appwriteItemId}
                type = "full"
              />
              <TransactionTable
                transactions = {currentTransactions}
              />

              {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={page} />
              </div>
            )}

            </TabsContent>
          ))}
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
