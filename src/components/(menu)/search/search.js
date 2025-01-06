const SearchComponents = () => {
  return (
    <div>
      <label className="form-label">جستجو</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="نام محصول ..."
        />
        <a href="#" className="input-group-text">
          <i className="bi bi-search"></i>
        </a>
      </div>
    </div>
  );
};

export default SearchComponents;
