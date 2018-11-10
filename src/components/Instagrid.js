import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
  <div>
    <Helmet>
      <script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
      />
    </Helmet>
    <iframe
      title="Instagram feed"
      src="http://lightwidget.com/widgets/a5cfff5bef345e838d8ee09ca1a18018.html"
      scrolling="no"
      allowtransparency="true"
      className="lightwidget-widget"
      style={{ width: "100%", border: 0, overflow: "hidden" }}
    />
  </div>
);
