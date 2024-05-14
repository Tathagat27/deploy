"use client";
import React, { useState } from "react";
import TemporarilyLockedPopup from "../../../../GlobalComponents/Popups_tutor/BoostrapModals/OptionsLocked/TemporarilyLocked";

const ProposalPage = () => {
  const [modalShow, setModalShow] = useState(true);
  return (
    <div>
      <TemporarilyLockedPopup
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </div>
  );
};

export default ProposalPage;
