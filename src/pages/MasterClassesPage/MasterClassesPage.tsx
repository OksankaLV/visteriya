import "./MasterClassesPage.scss";

import React from "react";

const MasterClassesPage = () => {
  return (
    <div className="master-classes">
      <h1>Майстер класи</h1>
      <p>Цей розділ в розробці.</p>
      <p>
        А поки що приєднуйтесь до телеграм-каналу з безкоштовними
        майстер-класами
      </p>
      <a
        className="master-classes__telegram-link"
        href="https://t.me/Visteriya_foodflorist"
        target="_blank"
        rel="noopener noreferrer"
      >
        Перейти в Telegram
      </a>
    </div>
  );
};

export default MasterClassesPage;
