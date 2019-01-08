#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QTimer>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow {
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();
private slots:
    void onPageLoadFinished(bool);
    void on_btn_noparam_clicked();
    void on_btn_withparam_clicked();
    void on_btn_withreturn_clicked();
public slots:
    void addMainWindowToHtml();
public:
    Q_INVOKABLE void JsCallNoParam();
    Q_INVOKABLE void JsCallWithParam(int num,QString str);
    Q_INVOKABLE QString JsCallWithReturn();
private:
    Ui::MainWindow *ui;
};

#endif // MAINWINDOW_H
