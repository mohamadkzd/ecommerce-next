"use client";

import SubmitBtn from "@/ui/submitBtn/submitBtn";
import { useEffect,useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { createAddress } from "../../../../../actions/profile";
const CreateForm = ({ provinces, cities }) => {
  const [citiesFilter, setCitiesFilter] = useState(
    cities.filter((city) => city.province_id == provinces[0].id)
  );// ma mitonim dakhele state ro arraye khali bzarim , vali age data e filter shode ke ostan haye meghdar aval id on haro neshon bde omadim az az filter estefade krdim

  const [stateCreate,fotmActionCreate]=useFormState(createAddress,{})

  useEffect(()=>{
      toast(stateCreate?.message,{type :`${stateCreate?.status}`})
  },[stateCreate])

  const chnageProvince = (e) => {
    // console.log(cities.filter((city) => city.province_id == e.target.value));

    setCitiesFilter(
      cities.filter((city) => city.province_id == e.target.value)
    );
  };
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        ایجاد آدرس جدید
      </button>

      <form action={fotmActionCreate} className="collapse mt-3" id="collapseExample">
        <div className="card card-body">
          <div className="row g-4">
            <div className="col col-md-6">
              <label className="form-label">عنوان</label>
              <input name="title" type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">شماره تماس</label>
              <input name="cellphone" type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">کد پستی</label>
              <input name="postal_code" type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">استان</label>
              <select name="province_id" className="form-select" onChange={chnageProvince}>
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
              <select name="city_id" className="form-select">
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
                type="text"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div>
            <SubmitBtn title="ایجاد" style="btn btn-primary mt-4"/>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateForm;
