import { getFetch } from "@/lib/config/fetcher";
import { numberFormat } from "@/lib/helper/helper";
import { cookies } from "next/headers";
import PaginateComponents from "../paginate/paginate";

const Table = async ({ params }) => {
  const token = cookies().get("token");
  const data = await getFetch(`/profile/transactions?${params}`, {
    Authorization: `Bearer ${token.value}`,
  });
  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>شماره سفارش</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>شماره پیگیری</th>
              <th>تاریخ</th>
            </tr>
          </thead>

          <tbody>
            {data.transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <th>{transaction.order_id}</th>
                  <td>{numberFormat(transaction.amount)}</td>
                  <td>
                    <span
                      className={
                        transaction.status == "موفق"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td>{transaction.trans_id}</td>
                  <td>{transaction.created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


      <PaginateComponents links={data.meta.links} />
    </>
  );
};

export default Table;
