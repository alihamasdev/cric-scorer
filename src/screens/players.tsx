import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export function PlayersScreen() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Players</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen></IonContent>
		</IonPage>
	);
}
