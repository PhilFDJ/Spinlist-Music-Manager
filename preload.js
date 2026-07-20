'use strict';
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('spinlist', {
  pickFolder: () => ipcRenderer.invoke('pick-folder'),
  getLastFolder: () => ipcRenderer.invoke('get-last-folder'),
  setLastFolder: (folder) => ipcRenderer.invoke('set-last-folder', folder),
  scanFolder: (folder, prev, forceRetag) => ipcRenderer.invoke('scan-folder', { folder, prev, forceRetag: !!forceRetag }),
  login: (email, password, remember) => ipcRenderer.invoke('login', { email, password, remember }),
  restoreSession: () => ipcRenderer.invoke('restore-session'),
  logout: () => ipcRenderer.invoke('logout'),
  getLibrary: () => ipcRenderer.invoke('get-library'),
  saveLibrary: (name, lib) => ipcRenderer.invoke('save-library', { name, lib }),
  onScanProgress: (cb) => ipcRenderer.on('scan-progress', (_e, data) => cb(data)),
  onScanTiming: (cb) => ipcRenderer.on('scan-timing', (_e, data) => cb(data)),
  timingNow: () => ipcRenderer.invoke('timing-now'),
  speedTest: (folder) => ipcRenderer.invoke('speed-test', folder),
  appVersion: () => ipcRenderer.invoke('app-version'),
});
