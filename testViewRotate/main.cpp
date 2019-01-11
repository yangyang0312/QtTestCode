#include "Widget.h"
#include <QApplication>
#include <QGraphicsScene>
#include <QObject>
#include "MyGraphicsProxyWidget.h"
#include "Manager.h"

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    Manager m;
    return a.exec();
}
