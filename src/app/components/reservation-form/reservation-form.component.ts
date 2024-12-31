import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.reservationForm = this.fb.group({
      nomPrenom: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]], // 8 digits phone number
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required]
    });
  }

  // Submit the form
  onSubmit(): void {
    if (this.reservationForm.valid) {
      const formData = this.reservationForm.value;

      // Create jsPDF instance
      const doc = new jsPDF();

      // Set Title with background color
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(30);
      doc.setTextColor(255, 255, 255); // White text
      doc.setFillColor(43, 122, 43); // Green background
      doc.rect(0, 0, 210, 30, 'F'); // Title background rectangle
      doc.text('Facture de Réservation', 105, 20, { align: 'center' });

      // Add a line under the header
      doc.setDrawColor(43, 122, 43); // Green line
      doc.setLineWidth(2);
      doc.line(10, 35, 200, 35);

      // Add Reservation details section
      doc.setFillColor(240, 240, 240); // Light gray background for sections
      doc.rect(10, 40, 190, 100, 'F'); // Light gray background rectangle

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0); // Black text

      let currentY = 50; // Initial Y position

      doc.text(`Nom et Prénom : ${formData.nomPrenom}`, 20, currentY);
      currentY += 12;
      doc.text(`Téléphone : ${formData.phone}`, 20, currentY);
      currentY += 12;
      doc.text(`Email : ${formData.email}`, 20, currentY);
      currentY += 12;
      doc.text(`Adresse : ${formData.adresse}`, 20, currentY);
      currentY += 20;

      // Add Thank You message with stylized font
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(16);
      doc.setTextColor(43, 122, 43); // Green color
      doc.text('Merci pour votre réservation !', 105, currentY, { align: 'center' });

      // Footer with company info (optional)
      currentY += 30;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100); // Light gray color
      doc.text('www.votre-entreprise.com', 105, currentY, { align: 'center' });

      // Save the PDF
      doc.save('facture-reservation.pdf');

      alert('Réservation réussie, la facture a été téléchargée.');
    } else {
      alert('Veuillez remplir correctement le formulaire');
    }
  }
}
