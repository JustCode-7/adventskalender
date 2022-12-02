import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * TODO:
   * Service worker is the technology that enables your app to use many Progressive Web App features,
   * such as offline, add to homescreen, and push notifications. With proper service worker and manifest implementations,
   * browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement.
   * Learn more -
   * Failure reason
   * No manifest was fetched
   *
   */

  ngOnInit(): void {
    this.installprompt();
  }

  installprompt() {
    // Initialize deferredPrompt for use later to show browser install prompt.
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      this.showInstallPromotion();
      // Optionally, send analytics event that PWA install promo was shown.
      console.log(`'beforeinstallprompt' event was fired.`);
    });
  }

  showInstallPromotion() {}
}
