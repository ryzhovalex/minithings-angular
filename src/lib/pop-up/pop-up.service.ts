import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { PopUpType, PopUpWindow } from "./models";

@Injectable({
    providedIn: "root"
})
export class PopUpService {
    private popUpWindow: BehaviorSubject<PopUpWindow> =
        new BehaviorSubject<PopUpWindow>({
            windowNum: -1,
            type: PopUpType.YesNo,
            title: ""
        });
    public popUpWindow$: Observable<PopUpWindow> =
        this.popUpWindow.asObservable();

    public shownCompId$: BehaviorSubject<string | undefined> =
        new BehaviorSubject<string | undefined>(undefined);

    public toggle(compId: string | undefined): void {
        this.shownCompId$.next(compId);
    }

    public spawn(window: PopUpWindow, compId: string): void {
        this.popUpWindow.next(window);
        this.toggle(compId);
    }
}
