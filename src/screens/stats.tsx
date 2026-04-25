import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export function StatsScreen() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Stats</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen></IonContent>
		</IonPage>
	);
}
