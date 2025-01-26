import LoadingOrders from "@/components/(profile)/orders/loading/laoding";
import Table from "@/components/(profile)/orders/table/table";
import { Suspense } from "react";

const Orders = ({ searchParams }) => {
  const params = new URLSearchParams(searchParams);
  return (
    <Suspense key={params.toString()} fallback={<LoadingOrders/>}>
      <Table params={params.toString()} />
    </Suspense>
  );
};

export default Orders;
