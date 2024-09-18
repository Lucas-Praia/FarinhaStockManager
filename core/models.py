from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin

class User(AbstractUser, PermissionsMixin):
    username = models.CharField(
        db_column='tx_username',
        max_length=64,
        unique=True,
        verbose_name='Nome de Usuário'
    )
    
    password = models.CharField(
        db_column='tx_password',
        max_length=104,
        verbose_name='Senha'
    )
    
    name = models.CharField(
        db_column='tx_name',
        max_length=256,
        null=True,
        blank=True,
        verbose_name='Nome Completo'
    )
    
    email = models.CharField(
        db_column='tx_email',
        max_length=256,
        null=True,
        blank=True,
        verbose_name='E-mail'
    )
    
    last_login = models.DateTimeField(
        db_column='dt_last_login',
        null=True,
        verbose_name='Último Login'
    )
    
    is_active = models.BooleanField(
        db_column='cs_active',
        default=True,
        verbose_name='Ativo'
    )
    
    is_superuser = models.BooleanField(
        db_column='cs_superuser',
        default=False,
        verbose_name='Superusuário'
    )
    
    is_staff = models.BooleanField(
        db_column='cs_staff',
        default=False,
        verbose_name='Membro da Equipe'
    )
    
    is_default = models.BooleanField(
        db_column='cs_default',
        default=False,
        verbose_name='Padrão'
    )

    def __str__(self):
        return self.username

    class Meta:
        managed = True
        db_table = 'auth_user'
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'
        ordering = ['username']


class Product(models.Model):
    title = models.CharField(
        db_column='tx_title',
        max_length=250,
        verbose_name='Title'
    )
    
    description = models.TextField(
        db_column='tx_description',
        null=True,
        blank=True,
        verbose_name='Description'
    )
    
    selling_price = models.DecimalField(
        db_column='selling_price',
        max_digits=20,
        decimal_places=2,
        verbose_name='Selling Price'
    )
    
    quantity = models.IntegerField(
        db_column='quantity',
        default=0,
        verbose_name='Quantity'
    )
    
    created_at = models.DateTimeField(
        db_column='dt_created',
        auto_now_add=True,
        verbose_name='Created at'
    )
    
    update_at = models.DateField(
        db_column='dt_update',
        auto_now=True,
        verbose_name='Update at'
    )
    
    class Meta:
        db_table = 'product'
        ordering = ['Title']
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
    
    def __str__(self):
        return self.title
    