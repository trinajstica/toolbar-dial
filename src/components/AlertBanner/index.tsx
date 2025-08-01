import { modals } from "#stores/useModals";
import { settings } from "#stores/useSettings";

import "./styles.css";

const appVersion = __APP_VERSION__;

export function AlertBanner() {
  function handleShowWhatsNew(e: React.MouseEvent<HTMLButtonElement>) {
    modals.openModal({
      modal: "whats-new",
      focusAfterClosed: e.currentTarget,
    });
  }

  return (
    <div className="AlertBanner" onContextMenu={(e) => e.stopPropagation()}>
      {settings.firstRun ? (
        <>
          <div className="banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="bullhorn"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z" />
            </svg>
            <div className="message">
              <strong>Welcome to Easy Speed Dial {appVersion}!</strong> You can
              set a background color or image, among other customizations, in{" "}
              <a href="settings.html" target="_blank" rel="noreferrer">
                Settings
              </a>
              .
            </div>
          </div>
          <div className="buttons">
            <button
              className="btn dismissBtn dismiss"
              aria-label="Dismiss"
              onClick={settings.hideAlertBanner}
            >
              <div />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="bullhorn"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z" />
            </svg>
            <div className="message">
              <strong>
                Easy Speed Dial has been updated to version {appVersion}!
              </strong>
            </div>
          </div>
          <div className="buttons">
            <button
              className="btn defaultBtn whats-new"
              onClick={handleShowWhatsNew}
              id="whats-new-button"
            >
              What&apos;s New
            </button>
            <button
              className="btn dismissBtn dismiss"
              aria-label="Dismiss"
              onClick={settings.hideAlertBanner}
            >
              <div />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
