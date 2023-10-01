import './index.css'

const ItemHistory = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <div>
        <div>
          <p>{timeAccessed}</p>
          <img className="logo" src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
          <button
            data-testid="delete"
            type="button"
            onClick="{onDeleteHistory}"
          >
            <img
              className="del"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default ItemHistory
