export class Permissions {
    restore : boolean = false;
    reboot : boolean = false;
    ban : boolean = false;
    forcevote : boolean = false;
    mute : boolean = false;
    kick : boolean = false;
    bypassturn : boolean = false;
    rename : boolean = false;
    grabip : boolean = false;
    xss : boolean = false;
    
    constructor(mask : number) {
        this.restore = (mask & 1) !== 0;
        this.reboot = (mask & 2) !== 0;
        this.ban = (mask & 4) !== 0;
        this.forcevote = (mask & 8) !== 0;
        this.mute = (mask & 16) !== 0;
        this.kick = (mask & 32) !== 0;
        this.bypassturn = (mask & 64) !== 0;
        this.rename = (mask & 128) !== 0;
        this.grabip = (mask & 256) !== 0;
        this.xss = (mask & 512) !== 0;
    }
}

export enum Rank {
    Unregistered = 0,
    Admin = 2,
    Moderator = 3,
}