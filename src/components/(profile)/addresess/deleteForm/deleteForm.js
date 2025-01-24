import SubmitBtn from "@/ui/submitBtn/submitBtn";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { deleteAddress } from "../../../../../actions/profile";

const DeleteForm = ({addressId}) => {
  const [stateDelete, formActionDelete] = useFormState(deleteAddress, {});

  useEffect(() => {
    toast(stateDelete?.message, { type: `${stateDelete?.status}` });
  }, [stateDelete]);

  return (
    <div className="form-delete-address">
      <form action={formActionDelete}>
        <input type="hidden" name="address_id" value={addressId} />
        <SubmitBtn title="حذف" style="btn btn-dark" />
      </form>
    </div>
  );
};

export default DeleteForm;
