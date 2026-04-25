import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export function MatchesScreen() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Matches</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen></IonContent>
		</IonPage>
	);
}
