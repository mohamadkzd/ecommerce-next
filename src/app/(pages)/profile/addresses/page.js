import CreateForm from "@/components/(profile)/addresess/createForm/createForm";
import EditForm from "@/components/(profile)/addresess/editForm/editForm";
import { getFetch } from "@/lib/config/fetcher";
import { cookies } from "next/headers";

const Addresses = async () => {
  const token = cookies().get("token");
  const { addresses, provinces, cities } = await getFetch(
    "/profile/addresses",
    { Authorization: `Bearer ${token.value}` }
  );
  // console.log(addresses);

  return (
    <>
      <CreateForm provinces={provinces} cities={cities} />

      <hr />
      {addresses?.map((address) => {
        return (
          <EditForm key={address.id} address={address} provinces={provinces} cities={cities} />
        );
      })}
    </>
  );
};

export default Addresses;
