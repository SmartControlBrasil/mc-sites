
interface SearchAreaProps {
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

export default function SearchArea({ searchOpen, setSearchOpen }: SearchAreaProps) {
  return (
    <>
      {/* <!-- Search  --> */}
      <div className="search-wrap" style={{display: searchOpen ? "block" : "none"}}>
        <div className="search-inner">
          <i className="fas fa-times search-close" onClick={() => setSearchOpen(false)} id="search-close"></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Search  --> */}
    </>
  )
}
