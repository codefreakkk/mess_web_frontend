import React from 'react'
import QRCode from "react-qr-code";


function Qrcodecomponent() {
  return (<div
    >
      <QRCode
        size={256}
        value={"harsh"}
        viewBox={`0 0 256 256`}
      />
    </div>
  )
}

export default Qrcodecomponent