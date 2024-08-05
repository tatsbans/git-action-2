import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HandshakeComponent } from './app/handshake/handshake.component'

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(HandshakeComponent)
  .catch((err) => console.error(err));
