import EditForm from "@/components/(profile)/Info/EditForm/editForm";
import { getFetch } from "@/lib/config/fetcher";
import { cookies } from "next/headers";

const Profile = async () => {
  const token = cookies().get("token");
  const user = await getFetch("/profile/info", {
    Authorization: `Bearer ${token.value}`,
  });
  //    console.log(user);

  return (
    <div className="vh-70">
      <EditForm user={user} />
    </div>
  );
};

export default Profile;
