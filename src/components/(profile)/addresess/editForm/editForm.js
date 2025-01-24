"use client";

import SubmitBtn from "@/ui/submitBtn/submitBtn";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { editAddress } from "../../../../../actions/profile";
import DeleteForm from "../deleteForm/deleteForm";

const EditForm = ({ address, provinces, cities }) => {
  // console.log("addresses",addresses);

  const [citiesFilter, setCitiesFilter] = useState(cities);
  const [stateEdit, fotmActionEdit] = useFormState(editAddress, {});

  useEffect(() => {
    toast(stateEdit?.message, { type: `${stateEdit?.status}` });
  }, [stateEdit]);

  const chnageProvince = (e) => {
    setCitiesFilter(
      cities.filter((city) => city.province_id == e.target.value)
    );
  };

  return (
    <>
      <div  className="position-relative">
        <form action={fotmActionEdit} className="card card-body mt-3">
          <div className="row g-4">
            <div className="col col-md-6">
              <label className="form-label">عنوان</label>
              <input
                name="title"
                defaultValue={address.title}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col col-md-6">
              <label className="form-label">شماره تماس</label>
              <input
                name="cellphone"
                defaultValue={address.cellphone}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col col-md-6">
              <label className="form-label">کد پستی</label>
              <input
                name="postal_code"
                defaultValue={address.postal_code}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col col-md-6">
              <label className="form-label">استان</label>
              <select
                name="province_id"
                defaultValue={address.province_id}
                className="form-select"
                onChange={chnageProvince}
              >
                {provinces?.map((province) => {
                  return (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col col-md-6">
              <label className="form-label">شهر</label>
              <select
                name="city_id"
                defaultValue={address.city_id}
                className="form-select"
              >
                {citiesFilter.map((city) => {
                  return (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col col-md-12">
              <label className="form-label">آدرس</label>
              <textarea
                name="address"
                defaultValue={address.address}
                type="text"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <input type="hidden" name="address_id" value={address.id} />
          </div>
          <div>
            <SubmitBtn title="ویرایش" style="btn btn-primary mt-4" />
          </div>
        </form>

        
        <DeleteForm addressId={address.id}/>
      </div>
    </>
  );
};

export default EditForm;
