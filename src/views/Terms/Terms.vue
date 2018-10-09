<template>
  <v-container>
    <v-layout row
              wrap>
      <v-flex xs12
              xl8
              offset-xl2>
        <v-card flat>
          <v-container >
            <v-layout  >
              <v-flex xs12>
                <div>
                  <p class="grey--text text--darken-1 headline">
                    <span v-html="content.titulo"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.fecha  }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo1 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo2"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo3 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo4 }}
                  </p>
                  <p class="grey--text text--darken-1 title">
                    <span v-html="content.subtitulo1"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo5 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo6 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo7 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.subtitulo2"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo8 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.parrafo9"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo10 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo11 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo12 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo13 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo14"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo15 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.subtitulo3"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo16 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.subtitulo4"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo17 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.subtitulo5"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo18 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.subtitulo6"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo19 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo20 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo21 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.subtitulo7"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo22 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.subtitulo8"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo23 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.subtitulo9"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo24 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.subtitulo10"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo25 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo26 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo27 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo28 }}
                  </p>
                  <p class="grey--text text--darken-2 title">
                    <span v-html="content.subtitulo11"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo29 }}
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Terms",
  data() {
    return {
      content: {
        titulo: "<b>Euler Kids  TERMS OF SERVICE</b>",
        fecha: "Last Updated: October 1st, 2018",
        parrafo1:
          "Welcome to the Euler Kids website hereafter " +
          "(“Euler Kids”, “site”, “platform”, “academy”, “we”, “our”).",
        parrafo2:
          "In order for our site to work effectively and we can offer " +
          "you a great educational service, we have created the following " +
          "<b>Terms of Service</b> that together with our <b>Privacy Notice</b> " +
          "will serve to have a better relationship with you and with all " +
          "our users.",
        parrafo3:
          "When you register for the first time on our site and when you " +
          "use our services, you are automatically accepting these Terms " +
          "of Service as well as our Privacy Notice, so please read them " +
          "carefully. These Terms of Service may be updated periodically " +
          "without prior notice, and are valid as a legal contract between " +
          "you (“User”) and us (“Euler Kids”). If you do not agree with " +
          "our policies, please do not use Euler Kids as well as any of " +
          "our web sites.",
        parrafo4:
          "Our Terms of Service (“Terms”) govern your access to our site and " +
          "the use of our services, including all of our websites, email " +
          "notifications, applications, blogs and other services that are " +
          "linked to these terms. These terms also govern any information, " +
          "text, links, graphics, photos or other material uploaded, or that " +
          "may appear in the services offered, referred hereafter as (“Content”).",
        subtitulo1: "<b>Service</b>",
        parrafo5:
          "Euler Kids is an educational digital platform where users are " +
          "encouraged to use our services and content to learn, practice and " +
          "develop their understanding of various school subjects such as " +
          "Mathematics, Science and Language. Any feature or functionality " +
          "that is added to the site will be subject to these Terms of Service.",
        parrafo6:
          "Being Euler Kids a website, there may occasionally be a period " +
          "of inactivity, lateness, elimination, erroneous delivery or lack of " +
          "storage of user communications or personalization settings that may " +
          "affect the services offered on our site. Euler Kids is not " +
          "responsible for the negative effects during downtime.",
        parrafo7:
          "To use our platform, you may have access to the Internet, either " +
          "directly or through devices that access web-based content. As well " +
          "as having all the necessary equipment to make this connection to the " +
          "Internet, including a computer, and a modem or other access device.",
        subtitulo2: "<b>Users</b>",
        parrafo8:
          "Euler Kids is designed to be fully available to anyone who is " +
          "willing to accept a binding contract with Euler Kids and who can " +
          "receive services under the laws of the corresponding jurisdiction. " +
          "It is your responsibility to be honest about the accuracy of the data " +
          "entered when you register. It is your responsibility to keep your username " +
          "and password confidential, since you are fully responsible for all actions " +
          "that are performed on the site under your username and password. It is your " +
          "responsibility, in the case of users under 13, to register with the prior " +
          "authorization of their parent or guardian.",
        parrafo9: "<b>THE EULER KIDS WEBSITE IS NOT AVAILABLE FOR:</b>",
        parrafo10: "a) ANY USER WHO HAS FACILITATED FAKE OR INACCURATE DATA.",
        parrafo11:
          "b) ANY USER WHO HAS REGISTERED A PROFILE IN THE NAME OF ANOTHER PERSON " +
          "OR ANY OTHER IDENTITY IMPERSONATION.",
        parrafo12:
          "c) ANY USER SUSPENDED OR PREVIOUSLY REMOVED FROM THE WEBSITE BY EULER KIDS.",
        parrafo13:
          "d) ANY PERSON UNDER 13 YEARS OF AGE WHOSE ACCOUNT HAS NOT BEEN APPROVED " +
          "BY A PARENT OR LEGAL GUARDIAN.",
        parrafo14:
          "<b>Users rights:</b> Euler Kids believes that users should have " +
          "their public information, identity, and data protected as strongly as possible." +
          "We use European Union data protection law as our baseline, for all users, " +
          "not just those under a European Union jurisdiction.",
        parrafo15:
          "By agreeing to these Terms, registered Users can have access to all " +
          "of Euler Kids' features and are free to use them for their own personal, " +
          "educational, charitable, or developmental purposes. Euler Kids itself is " +
          "also free/libre open-source software licensed under the GNU AGPL. " +
          "This doesn’t prevent Euler Kids from having the ultimate decision in what " +
          "kind of use of the Services is appropriate.",
        subtitulo3: "<b>Privacy Notice</b>",
        parrafo16:
          "Our Privacy Notice describes how we handle the information " +
          "you provide when you use our services. Currently, Euler Kids follows " +
          "Mexican data protection legislation such as the Federal Law on Protection " +
          "of Personal Data Held by Individuals, the regulation of ARCO rights (Access, " +
          "Rectification, Cancellation and Opposition of the handling of their personal " +
          "data), and the International Security Rules such as the Child Privacy Policy " +
          "on the Internet or the COPPA Rule, the provisions of the Family Educational " +
          "Rights and Privacy Act or FERPA, the European Union General Data Processing " +
          "Regulations (GDPR) and the Student's Privacy Pledge.",
        subtitulo4: "<b>Copyrights</b>",
        parrafo17:
          "Euler Kids has all the rights over the intellectual property " +
          "of the content of its site, the texts, images, illustrations, computer code, " +
          "software, services, lessons, videos, educational exercises and all the other " +
          "elements of our website are protected by the Mexican and International laws " +
          "of copyright, patents and trademarks, international conventions and other " +
          "applicable laws that govern intellectual property and intellectual property " +
          "rights. You must respect and understand that everything you read, or see in " +
          "Euler Kids and the rest of the site is copyrighted and it is completely " +
          "illegal to copy, reproduce, transmit, distribute, re-publish, modify, share or " +
          "display it for any commercial use or to create derivative works based on the " +
          "service or software, in whole or in part.",
        subtitulo5: "<b>Donations</b>",
        parrafo18:
          "Users are free to donate to Euler Kids. " +
          "Euler Kids will receive all donated funds, except when there are third party " +
          "transaction fees. The donation is a gift to Euler Kids, and is not an " +
          "investment, a loan or implies an additional transfer of services that is not " +
          "a small visual aesthetic. Donations made fraudulently, with bank error or double " +
          "transfer can be returned to the donor's account or bank card that made the donation " +
          "if requested before 14 days.",
        subtitulo6: "<b>Limitation of Liability</b>",
        parrafo19:
          "Euler Kids services are provided “as is” and “as available basis.” " +
          "Euler Kids disclaims all warranties and conditions, either express or implied, " +
          "of merchantability, fitness for a particular purpose or non-infringement. Euler Kids " +
          "offers no guarantee or representation, and disclaims all responsibility " +
          "for the integrity, availability, timeliness, accuracy and security of the content " +
          "and services, or for damage or loss of data to your computer system, elimination " +
          "or lack of storage or transmission of communications or content maintained by the " +
          "services, or if the services will meet your requirements or be available in an " +
          "uninterrupted, secure or error-free manner. Euler Kids is not responsible for " +
          "any loss, financial or otherwise, from third party sources, including " +
          "misrepresentations, negligence or fraud.",
        parrafo20:
          "Any material downloaded or obtained in any other way through " +
          "the use of the service will be made at your own discretion and risk and " +
          "the user will be complete responsible for any damage to your computer system " +
          "or loss of data resulting from the download of such material.",
        parrafo21:
          "No advice, information or written correspondence, whether oral " +
          "or written, acquired by entities of Euler Kids or through the services " +
          "of Euler Kids, will create any guarantee or representation not expressly " +
          "made here.",
        subtitulo7: "<b>Links</b>",
        parrafo22:
          "Euler Kids may include links to other websites or services " +
          "only for informational purposes for users. These links are provided just " +
          "for your convenience and the inclusion of such links does not represent an " +
          "endorsement by Euler Kids. We are not responsible for the content of any " +
          "linked website or resource, and we make no representations regarding the accuracy " +
          "of such websites or resources.",
        subtitulo8: "<b>Advertisements</b>",
        parrafo23:
          "Euler Kids in the domain www.eulerkids.com will never host " +
          "advertisements. Euler Kids is not responsible for third-party ads, " +
          "widgets and applications hosted by service providers on their social networks.",
        subtitulo9: "<b>Indemnification</b>",
        parrafo24:
          "You agree to indemnify, defend and hold harmless Euler Kids, " +
          "its affiliated companies, contractors, employees, agents and external suppliers, " +
          "licenses and partners from any claim, loss, damage, liability and expenses " +
          "(including legal fees and expenses) that arise of any use or misuse of the " +
          "site, any violation of the Terms or any breach of the representations, warranties " +
          "and agreements included herein, either by this or any child user associated with you. " +
          "Euler Kids reserves the right to assume the defense and exclusive control of any " +
          "matter for which it must indemnify Euler Kids and agree to cooperate with Euler Kids' " +
          "defense of such claims. Euler Kids will make every reasonable effort to " +
          "notify you of any claim, action or proceeding upon becoming aware of it.",
        subtitulo10: "<b>General</b>",
        parrafo25:
          "Euler Kids may make changes to these Terms of Service from time " +
          "to time. Changes may be retroactive in some limited circumstances and replace " +
          "any prior agreement between you and Euler Kids. We will try to notify you " +
          "about important revisions through a service notification or through an email " +
          "associated with your account. By continuing to use the services after these reviews, " +
          "you agree to be bound by the changing terms of the service. You accept under the " +
          "provisions of Mexican and International laws to continue using our services.",
        parrafo26:
          "In the event that any provision of these terms is deemed invalid " +
          "or unenforceable, that provision will be limited to the minimum possible " +
          "application, and the remaining terms will remain in full effect.",
        parrafo27:
          "Euler Kids may modify or temporarily discontinue the site " +
          "service (or part thereof) at any time and from time to time, with or " +
          "without notice. You agree that Euler Kids will not be liable to you " +
          "or any third party for any modification, suspension or temporary interruption " +
          "of the service.",
        parrafo28: "These terms are an agreement between you and Euler Kids.",
        subtitulo11: "<b>Premium Accounts</b>",
        parrafo29:
          "Euler Kids does not count and will never create premium " +
          "accounts. All our users are premium and have access to all the functions " +
          "of our site."
      }
    };
  }
};
</script>
