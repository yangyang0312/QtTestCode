#include "MainWindow.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    qRegisterMetaType<Qt::HANDLE>("Qt::HANDLE");
    QApplication a(argc, argv);
    MainWindow w;
    w.show();

    return a.exec();
}
