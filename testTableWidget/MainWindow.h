#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <vector>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private slots:
    void on_tableWidget_cellClicked(int row, int column);

private:
    Ui::MainWindow *ui;
    std::vector<bool> vecChecked;
};

#endif // MAINWINDOW_H
