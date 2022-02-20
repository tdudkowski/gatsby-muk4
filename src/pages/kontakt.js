import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/css/font-awesome.css"

const KontaktPage = ({ data }) => (
  <Layout page="contact">
    <Seo title="Kontakt" />
    <h2>Kontakt</h2>
    <p>
      Zapraszamy do współpracy firmy, instytucje oraz biura turystyczne. Gwarantujemy fachową obsługę,
      oryginalny i ciekawy sposób oprowadzania. Oferujemy usługi w języku polskim i niemieckim.
      Wystawiamy faktury.
    </p>

    <div className="contact-card">
      <section>
        Via Wrocław-Małgorzata Urlich-Kornacka
        <br />
        ul. Budziszyńska 27a/26
        <br />
        54-434 Wrocław
        <br />
        NIP: 616-139-17-82
      </section>
      <section>
        <i className="fa fa-mobile" aria-hidden="true"></i>&nbsp;607 239 776
        <br />
        <i className="fa fa-at" aria-hidden="true"></i>
        &nbsp;malgorzata.wroclove@gmail.com
        <br />
        Jesteśmy na facebooku:{" "}
        <a href="https://pl-pl.facebook.com/stowarzyszenieTUiTAM">
          Stowarzyszenie TUiTAM
        </a>
      </section>
    </div>
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        <h3>E-Mail</h3>
        <input type="email" name="replyto" id="replyto" required />
      </label>
      <label>
        <h3> Wiadomość / Nachricht </h3>
        <textarea name="message" id="message" rows="8" required />
      </label>
      <div className="btns">
        <button type="submit" className="btn">
          Wyślij / Nachricht senden
        </button>
        <input type="reset" value="Wyczyść / Nachricht löschen " className="btn" />
      </div>
    </form>

    <GatsbyImage image={getImage(data.wycieczka.childImageSharp.gatsbyImageData)} alt="wycieczka" />

  </Layout>
)

export default KontaktPage

export const publikacjeQuery = graphql`
  query ImagesKontakt {
        wycieczka: file(
      relativePath: {eq: "wycieczka4.jpg" }
    ) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
      }
    }
  }
  `