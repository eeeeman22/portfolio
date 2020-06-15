import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import { video_data } from '../data/video_data.js'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* WORK */}
        <article
          id="apps"
          className={`${this.props.article === 'apps' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Apps</h2>
          <span className="image main">{/* <img src={pic01} alt="" /> */}</span>

          {/* insert stuff here */}

          {close}
        </article>

        {/* RECORDINGS */}
        <article
          id="recordings"
          className={`${this.props.article === 'recordings' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Recordings</h2>
          {video_data.map(video => {
            return (
              <div style={{ textAlign: 'left' }} key={video.id}>
                <div style={{ height: '40px' }}></div>
                {video.composer}
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    paddingTop: '56.25%',
                  }}
                >
                  <iframe
                    title={video.composer}
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      border: '0',
                    }}
                    src={video.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {video.performers}
                {video.info
                  ? video.info.split('\n').map(line => <div>{line}</div>)
                  : ''}
              </div>
            )
          })}
          {close}
        </article>

        {/* ABOUT */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Ian is a software Engineer, Saxophonist, and Educator from New York.
            He is passionate about building fullstack applications with
            JavaScript, React+Redux, Node.js, and Docker. Ian is a graduate of
            the Advanced Software Engineering Immersive at Hack Reactor NYC. He
            holds degrees in Music Education and Saxophone from The Hartt
            School, and a masters degree in Saxophone from Pennsylvania State
            University.
          </p>
          {close}
        </article>

        {/* CONTACT */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="mailto:i.robinson22@icloud.com"
                className="icon fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ianrsax" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/irobinson22"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/eeeeman22" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
