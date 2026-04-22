import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})

export class Calendar 
implements OnInit {

  selectedDate?: string;
  currentMonth = new Date();
  weekDays = ['L', 'M', 'M', 'G', 'V', 'S', 'D'];
  days: any[] = [];

  bookedDates = [
    '2026-05-10',
    '2026-05-11',
    '2026-05-18'
  ];

  
  isPast(day: any): boolean {
    if (!day.date) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const date = new Date(day.date);
    return date < today;
  }


  
  selectDate(day: any) {
    if (!day.date || day.booked || this.isPast(day)) return;

    this.selectedDate = day.date;
  }

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    this.days = [];
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();

    const firstDay = new Date(year, month, 1).getDay() || 7;
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i < firstDay; i++) {
      this.days.push({ date: null });
    }

    for (let d = 1; d <= totalDays; d++) {
      const dateStr = new Date(year, month, d)
        .toISOString()
        .split('T')[0];

      this.days.push({
        date: dateStr,
        label: d,
        booked: this.bookedDates.includes(dateStr)
      });
    }
  }

  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.generateCalendar();
  }

  prevMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.generateCalendar();
  }
}


