
const SearchForm = (props) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Gif"
          id="search"
        />
        <br />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;