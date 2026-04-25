import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export function CompareScreen() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Compare</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen></IonContent>
		</IonPage>
	);
}
