// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  onClickChangeImage = () => {
    const {imageDetails, changeImage} = this.props
    changeImage(imageDetails)
  }

  render() {
    const {imageDetails, currentActive} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = imageDetails
    let classToApply
    if (currentActive === id) {
      classToApply = 'thumbnail-boxes-show'
    } else {
      classToApply = 'thumbnail-boxes-hide'
    }

    return (
      <li>
        <button
          type="button"
          onClick={this.onClickChangeImage}
          className={classToApply}
        >
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail-image"
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
