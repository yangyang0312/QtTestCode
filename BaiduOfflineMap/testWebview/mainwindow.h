#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QTimer>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();
protected:
    bool eventFilter(QObject * obj, QEvent * event);
private slots:
    void onPageLoadFinished(bool);
    void on_zoomout_clicked();
    void on_zoomin_clicked();
    void on_fit_clicked();
    void on_add_clicked();
    void on_delete_2_clicked();
    void on_delete_all_clicked();
    void ClickTimeOut();
    void on_call_clicked();
    void on_cancel_clicked();
    void on_check_type_stateChanged(int arg1);

public slots:
    void addMainWindowToHtml();
public:
    Q_INVOKABLE void callNumber(QString number);
private:
    void FixPoint(QPoint & point);
    void HideDrawLayer();
private:
    Ui::MainWindow *ui;
    QPoint startPos_;
    QPoint endPos_;
    bool bDrawRect_;
    bool bClicked_;
    QTimer * clickTimer_;
    int timerInterval_;
    QStringList phoneNumbers_;
};

#endif // MAINWINDOW_H
