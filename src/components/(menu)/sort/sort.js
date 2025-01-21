"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Sort = () => {

    const pathName = usePathname();
    const router = useRouter();
  
    // dalile khate zir video filter jostejo baraye rafe bag ha hast ke age chizi az search bod dakhelesh hazf nkne
    const searchParams = useSearchParams();

  const handleClick=(type)=>{
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", type);
    params.delete("page");
    router.replace(`${pathName}?${params.toString()}`);
  }
  
    return (
    <div>
      <label className="form-label">مرتب سازی</label>
      <div className="form-check my-2">
        <input
        onChange={()=>handleClick('max')}
        checked={searchParams.has('sortBy') && searchParams.get('sortBy')=='max'}
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">بیشترین قیمت</label>
      </div>
      <div className="form-check my-2">
        <input
         onChange={()=>handleClick('min')}
        checked={searchParams.has('sortBy') && searchParams.get('sortBy')=='min'}

          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">کمترین قیمت</label>
      </div>
      <div className="form-check my-2">
        <input
        onChange={()=>handleClick('bestseller')}
        checked={searchParams.has('sortBy') && searchParams.get('sortBy')=='bestseller'}

          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">پرفروش ترین</label>
      </div>
      <div className="form-check my-2">
        <input
        onChange={()=>handleClick('sale')}
        checked={searchParams.has('sortBy') && searchParams.get('sortBy')=='sale'}

          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">با تخفیف</label>
      </div>
    </div>
  );
};

export default Sort;
