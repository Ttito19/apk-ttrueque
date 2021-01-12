import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  darkMode: boolean = false;
  constructor() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.darkMode = !prefersDark.matches;
    console.log(prefersDark);
  }

  ngOnInit() {}
  changeDark() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle("dark");
  }
}
