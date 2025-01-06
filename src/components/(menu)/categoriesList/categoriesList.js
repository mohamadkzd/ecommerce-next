const CategoriesListComponents = ({categories}) => {
  return (
    <div className="filter-list">
      <div className="form-label">دسته بندی</div>
      <ul>
        {categories?.map((item) => {
          return (
            <li
              key={item.id}
              className="my-2 cursor-pointer"
            >
              {item.name}
            </li>
          );
        })}
        {/* <li className="my-2 cursor-pointer">برگر</li>
          <li className="my-2 cursor-pointer">پیش غذا و سالاد</li>
          <li className="my-2 cursor-pointer">نوشیدنی</li> */}
      </ul>
    </div>
  );
};

export default CategoriesListComponents;
