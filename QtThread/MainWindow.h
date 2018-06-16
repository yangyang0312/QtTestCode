#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QThread>
#include "MyThread1.h"
#include "MyThread2.h"

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

signals:
    void Process(int num);
    void Process2(int num);

public slots:
    void ProcessComplete(Qt::HANDLE threadId,int num);

private slots:
    void on_btn_start_1__clicked();
    void on_btn_start_2__clicked();
    void on_btn_process_1__clicked();
    void on_btn_process_2__clicked();

private:
    Ui::MainWindow *ui;
    MyThread1 * thread1_;
    QThread * thread2_;
    int number_;
};

#endif // MAINWINDOW_H
