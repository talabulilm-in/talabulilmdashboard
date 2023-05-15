import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";


function EsaleSawab() {
  return (
    <div className='contain'>
        <div className="page-header">
          <span className="backBtn" onClick={()=> window.history.back()}>
            <MdArrowBackIosNew />
          </span>
          <div className="page-header__content">
            <h2 className="pagetitle">Esal-E-Sawab</h2>
          </div>
       </div>
       <div class="contentSection">
        <h3 className='contentSection_subtitle'>✨ONLY GIRLS GROUP ✨</h3>
            <p class="contentSection_title--content">
            तिलवात ए कुरआन करने के मक़सद से, इस नाम से व्हाट्सएप (WhatsApp) पे एक ग्रुप बनाया गया है 
            ( जो सिर्फ लड़कियों के लिए है ), इसमें आपको महीने के शुरू में 2 पारे पढ़ने को दिए जायेंगे, जिसे आपको
             एक महीने अंदर पढ़ना होगा !
            </p>
            <h3 className='contentSection_subtitle'>ग्रुप बनाने का मकसद :</h3>
            <h4 className='contentSection_subheading'>एक महीने में सिर्फ 2 पारे</h4>
            <p class="contentSection_title--content">
            महीने के शुरुआत में हर एक शख्स को 2 पारे पढ़ने को दिए जायेंगे, जिसको एक महीने के अंदर पढ़ना होगा !!
             हर शख्स से एक मरहूम का नाम पूछा जायेगा, और महीने के आखिर में जितनी भी कुरआन शरीफ पढ़ी गई होंगी,
              उन सब का सवाब हर एक मरहूम को बख्श दिया जाएगा !!
            </p>
            <h4 className='contentSection_subheading'>*फायदा :*</h4>
            <p class="contentSection_title--content">इसके बेशुमार फायदे हैं जिसमे से चंद ये हैं 👇</p>
            <p class="contentSection_title--content">तिलवात ए कुरआन का मौक़ा मिलेगा !<br />
              आपको सिर्फ 2 पारे पढ़ने होंगे, लेकिन महीने के आखिर में जितनी भी कुरआन शरीफ पढ़ी गई होंगी, 
              उन सब का सवाब हर एक मरहूम को मिलेगा !!<br />
              आप जितने लोगो को इस ग्रुप में जोड़ेंगे, उन सबके पढ़ने का सवाब आपको भी मिलेगा !!</p>
              <h4 className='contentSection_subheading'>नोट :</h4>
            <p class="contentSection_title--content">* सज्दा-ए-तिलावत का खास ख्याल रखे !</p>
            <p  class="contentSection_title--content">जिस शख्स के पारे में जो सज्दा ( सज्दा-ए-तिलावत ) आयेगा, 
            वो उसको ही अदा करना होगा!!</p>
            <p  class="contentSection_title--content">* इस ग्रुप में पारो से related मैसेज के अलावा किसी भी तरह का 
            कोई मैसेज send नही किया जाएगा !!</p>
            <p class="contentSection_title--content">जिसको भी इस ग्रुप में add होना हो या किसी और को add करवाना हो तो वो हमे अपना whatsapp number, instagram pe jaker send kr sakte hain</p>
              <p class="contentSection_title--content">और ज़्यादा मालूमात के लिए. मैसेज करे</p>
         </div>
    </div>
  )
}

export default EsaleSawab