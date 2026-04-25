import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export function TeamsScreen() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Teams</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen></IonContent>
		</IonPage>
	);
}
